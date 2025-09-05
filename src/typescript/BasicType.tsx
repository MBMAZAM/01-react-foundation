

export const BasicType = () => {

  const name: string = 'Mauricio';
  const age: number = 25;
  const isActive = true;
  const power: string[] = ['Angular', 'React'];
  power.push('Hola')

  return (
    <>
      <div>BasicType</div>
      {name} {age} {isActive ? 'True' : 'False'}
      <br />
      {power.join(', ')}
    </>
  )
}
