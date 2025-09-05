
interface Person {
  fullName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiteral = () => {

  const person: Person = {
    fullName: 'Mauricio Maza',
    age: 25,
    address: {
      country: 'Peru',
      houseNo: 156
    }
  }




  return (
    <>
      <div>ObjectLiteral</div>
      <pre>
      {
        JSON.stringify(person, null, 2)
      }
      </pre>

    </>
  )
}
