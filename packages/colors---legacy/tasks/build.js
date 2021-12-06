/**
 * Copyright IBM Corp. 2015, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */

'use strict';

const {
  colors,
  unstable_hoverColors: hoverColors,
} = require('@unitednations/colors');
const { types: t, generate } = require('@unitednations/scss-generator');
const { paramCase } = require('change-case');
const fs = require('fs-extra');
const path = require('path');

const FILE_BANNER =
  t.Comment(` Code generated by @unitednations/colors. DO NOT EDIT.

 Copyright IBM Corp. 2018, 2020

 This source code is licensed under the Apache-2.0 license found in the
 LICENSE file in the root directory of this source tree.
`);
const NAMESPACE = 'carbon';

async function build() {
  // Colors has the shape:
  // type Colors = {
  //   [swatch: string]: {
  //     [grade: string]: string,
  //   }
  // };
  //
  // We want to convert this into a flat array of variable descriptors that we
  // can use to create mixins. This flat array will look like:
  // type ColorValues = Array<{ swatch: string, grade: string, value: string }>
  const colorValues = Object.keys(colors).reduce((acc, key) => {
    const swatch = paramCase(key);
    const values = Object.keys(colors[key]).reduce((acc, grade) => {
      const value = colors[key][grade];
      return acc.concat({
        swatch,
        grade,
        value,
      });
    }, []);

    return acc.concat(...values);
  }, []);

  // Build up our collection of hover color values. This structure is a little
  // different than our other color format because of how we format the name to
  // include the grade in between the swatch name and the hover keyword
  const hoverColorValues = Object.keys(hoverColors).reduce((acc, key) => {
    const swatch = paramCase(key.replace(/Hover/, ''));

    if (typeof hoverColors[key] !== 'object') {
      return acc.concat({
        name: `${swatch}-hover`,
        value: hoverColors[key],
      });
    }

    const values = Object.keys(hoverColors[key]).reduce((acc, grade) => {
      const value = hoverColors[key][grade];
      return acc.concat({
        name: `${swatch}-${grade}-hover`,
        value,
      });
    }, []);

    return acc.concat(...values);
  }, []);

  const colorMapProperties = t.SassMap({
    properties: Object.keys(colors).flatMap((swatch) => {
      const value = t.SassMap({
        properties: Object.keys(colors[swatch]).map((grade) => {
          return t.SassMapProperty({
            key: t.Identifier(grade),
            value: t.SassColor(colors[swatch][grade]),
          });
        }),
      });

      if (swatch === paramCase(swatch)) {
        return [
          t.SassMapProperty({
            key: t.Identifier(swatch),
            value,
            quoted: true,
          }),
        ];
      }

      return [
        t.SassMapProperty({
          key: t.Identifier(paramCase(swatch)),
          value,
          quoted: true,
        }),
        t.SassMapProperty({
          key: t.Identifier(swatch),
          value,
          quoted: true,
        }),
      ];
    }),
  });

  const prefixes = ['ibm-color__', 'carbon--', ''];
  const variables = prefixes.flatMap((prefix) => {
    return colorValues.flatMap(({ swatch, grade, value }) => {
      return t.Assignment({
        id: t.Identifier(`${prefix}${swatch}-${grade}`),
        init: t.SassColor(value),
        default: true,
      });
    });
  });

  for (const color of hoverColorValues) {
    variables.push(
      t.Assignment({
        id: t.Identifier(color.name),
        init: t.SassColor(color.value),
        default: true,
      })
    );
  }

  variables.push(
    t.Assignment({
      id: t.Identifier('ibm-color-map'),
      init: colorMapProperties,
      default: true,
    }),
    t.Assignment({
      id: t.Identifier('carbon--colors'),
      init: colorMapProperties,
      default: true,
    }),
    t.Newline()
  );

  const ibmColorsMixin = t.SassMixin({
    id: t.Identifier('ibm--colors'),
    body: t.BlockStatement([
      ...colorValues.flatMap(({ swatch, grade, value }) => {
        return t.Assignment({
          id: t.Identifier(`ibm-color__${swatch}-${grade}`),
          init: t.SassColor(value),
          global: true,
        });
      }),
      t.Assignment({
        id: t.Identifier('ibm-color-map'),
        init: colorMapProperties,
        global: true,
      }),
    ]),
  });

  const carbonColorsMixin = t.SassMixin({
    id: t.Identifier('carbon--colors'),
    body: t.BlockStatement([
      ...colorValues.flatMap(({ swatch, grade, value }) => {
        return t.Assignment({
          id: t.Identifier(`carbon--${swatch}-${grade}`),
          init: t.SassColor(value),
          global: true,
        });
      }),
      t.Assignment({
        id: t.Identifier('carbon--colors'),
        init: colorMapProperties,
        global: true,
      }),
    ]),
  });

  const mixins = t.StyleSheet([
    FILE_BANNER,
    ...variables,
    t.Comment(`/ Define color variables
/ @access public
/ @group @unitednations/colors
/ @deprecated Use \`$carbon--colors\` going forward`),
    ibmColorsMixin,
    t.Newline(),
    t.Comment(`/ Define color variables
/ @access public
/ @group @unitednations/colors`),
    carbonColorsMixin,
  ]);

  const entrypoint = t.StyleSheet([
    FILE_BANNER,
    t.SassImport('./mixins'),
    t.Comment(' Deprecated ☠️'),
    t.SassMixinCall(t.Identifier('ibm--colors')),
    t.Comment(' Preferred'),
    t.SassMixinCall(t.Identifier(`${NAMESPACE}--colors`)),
  ]);

  const sassModule = t.StyleSheet([
    FILE_BANNER,
    t.Newline(),

    t.Assignment({
      id: t.Identifier('black'),
      init: t.SassColor('#000000'),
      default: true,
    }),
    t.Assignment({
      id: t.Identifier('white'),
      init: t.SassColor('#ffffff'),
      default: true,
    }),
    t.Newline(),

    ...colorValues.map(({ grade, swatch, value }) => {
      return t.Assignment({
        id: t.Identifier(`${swatch}-${grade}`),
        init: t.SassColor(value),
        default: true,
      });
    }),

    t.Newline(),

    ...hoverColorValues.map(({ name, value }) => {
      return t.Assignment({
        id: t.Identifier(name),
        init: t.SassColor(value),
        default: true,
      });
    }),

    t.Newline(),

    t.Comment(`/ Colors from the IBM Design Language
/ @access public
/ @group @unitednations/colors`),
    t.Assignment({
      id: t.Identifier('colors'),
      init: t.SassMap({
        properties: Object.keys(colors).map((key) => {
          const swatch = paramCase(key);
          return t.SassMapProperty({
            key: t.Identifier(swatch),
            value: t.SassMap({
              properties: Object.keys(colors[key]).map((grade) => {
                return t.SassMapProperty({
                  key: t.Identifier(grade),
                  value: t.SassColor(colors[key][grade]),
                });
              }),
            }),
          });
        }),
      }),
      default: true,
    }),
  ]);

  const SCSS_DIR = path.resolve(__dirname, '../scss');
  const COLORS_ENTRYPOINT = path.join(SCSS_DIR, 'colors.scss');
  const INDEX_ENTRYPOINT = path.join(SCSS_DIR, 'index.scss');
  const MIXINS_ENTRYPOINT = path.join(SCSS_DIR, 'mixins.scss');
  const MODULES_ENTRYPOINT = path.resolve(SCSS_DIR, '..', 'index.scss');

  await fs.ensureDir(SCSS_DIR);
  await Promise.all([
    fs.writeFile(COLORS_ENTRYPOINT, generate(entrypoint).code),
    fs.writeFile(INDEX_ENTRYPOINT, generate(entrypoint).code),
    fs.writeFile(MIXINS_ENTRYPOINT, generate(mixins).code),
    fs.writeFile(MODULES_ENTRYPOINT, generate(sassModule).code),
  ]);
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});