function TableRow({num, index}) {
  return (
    <div>
        <p>{num} x {index} = {num * index}</p>
    </div>
  )
}
export default TableRow