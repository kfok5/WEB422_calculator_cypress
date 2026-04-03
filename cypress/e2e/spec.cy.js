// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe("tests calculation workflow", {}=>{
//   it("should add 1+1 and render 2" ()=>{

//   })})
// }

describe("Testing calculator component", () => {

  beforeEach( () => {
    cy.visit("/");
  });

  it("Addition test: 5 + 3 = 42", () => {
    cy.contains("5").click();
    cy.contains("+").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get("input").should("have.value", "8");
  });

  it("Subtraction test: 10 - 4 = 6", () => {
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("-").click();
    cy.contains("4").click();
    cy.contains("=").click();
    cy.get("input").should("have.value", "6");
  });

  it("Multiplication test: 6 * 7 = 42", () => {
    cy.contains("6").click();
    cy.contains("*").click();
    cy.contains("7").click();
    cy.contains("=").click();
    cy.get("input").should("have.value", "42");
  });

  it("Division test: 15 / 3 = 5", () => {
    cy.contains("1").click();
    cy.contains("5").click();
    cy.contains("/").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get("input").should("have.value", "5");
  });
});
