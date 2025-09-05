
export const BasicFunctional = () => {

  const addTwoNumber = (a: number, b: number) => {
    return a + b;
  }



  return (
    <>
      <div>BasicFunctional</div>
      <span>El resultado de la suma es: {addTwoNumber(8, 10)}</span>
    </>


  )
}
