# @x12i/memorix-data-journey usage example

Evidence-backed data-journey cone projection — observations → matrix rows/columns/cells (never metadata-painted).

This consuming application demonstrates **project a captured record observation into an evidence matrix** using the published npm package, pinned to `3.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Project observed processing evidence into a data-journey matrix.
- Inspect the actual properties observed at each processing step.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-data-journey)
- [Implementation monorepo](https://github.com/x12i/memorix-mono-repo)
- [Reviewed package source](https://github.com/x12i/memorix-mono-repo/tree/b87d277ff9c40cedc18d5f4775642baf8a2d3df1/memorix-data-journey)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This consumer uses authored records, local transformations or in-memory ports. It does not execute a skill/model, run a production pipeline, connect to MongoDB, materialize live relationships, acquire provider data or perform an outbound delivery. The in-memory examples do not establish durability across process restarts.
