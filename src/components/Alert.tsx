

export const Alert = ({msg}:{msg:String}) => {
  return (
    <div className="bg-red-600 text-center  p-3 rounded-md uppercase text-white font-bold  text-sm my-8">
      {msg}
    </div>
  )
}

