import { print } from "../mod.ts";
import { assertEquals } from "./deps.ts";

Deno.test("print (no error)", () => {
  const result = print({
    program: {
      type: "Module",
      body: [
        {
          declarations: [
            {
              definite: false,
              id: {
                optional: false,
                span: { ctxt: 0, end: 7, start: 6 },
                type: "Identifier",
                typeAnnotation: {
                  span: { ctxt: 0, end: 15, start: 7 },
                  type: "TsTypeAnnotation",
                  typeAnnotation: {
                    kind: "number",
                    span: { ctxt: 0, end: 15, start: 9 },
                    type: "TsKeywordType",
                  },
                },
                value: "x",
              },
              init: {
                span: { ctxt: 0, end: 19, start: 18 },
                type: "NumericLiteral",
                value: 2,
              },
              span: { ctxt: 0, end: 19, start: 6 },
              type: "VariableDeclarator",
            },
          ],
          declare: false,
          kind: "const",
          span: { ctxt: 0, end: 20, start: 0 },
          type: "VariableDeclaration",
        },
      ],
      interpreter: null,
      span: { ctxt: 0, end: 20, start: 0 },
    },
    options: {
      minify: true,
    },
  });
  assertEquals(result.code.trim(), "const x:number=2;");
});
