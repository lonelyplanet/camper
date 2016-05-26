import Camper from "../src/";
import { expect } from "chai";
import sinon from "sinon";

describe("camper", () => {
  it("should be a thing", () => {
    expect(Camper).to.be.ok;
  });

  it("should compile pages", () => {
    const camper = new Camper({
      pages: [{
        compiler: {
          compile: sinon.spy()
        },
      }],
    });

    camper.build();

    expect(camper.pages[0].compiler.compile.callCount).to.equal(1);
  });
});
