export default function CreateForm(props) {
    return (
      <form
        onSubmit={props.onSubmit}
        className="flex-col w-4/6 p-2 mx-auto my-8 bg-emerald-300 rounded-md"
      >
        <fieldset>
          <h1 className="my-3 text-2xl text-center font-sans" type="text">
            Create Cookie Stand
          </h1>
          <div className="flex w-100 font-weight: 500">
            <label className="ml-7 font-sans font-weight: 500">Location</label>
            <input name="location" className="flex w-10/12 ml-2 gray-200" />
          </div>
          <div className="flex w-10/12 gap-8 p-4 pb-5 ml-1">
            <div className="flex-col w-1/2 ">
              <label className="pl-3">Minimum Customers per Hour</label>
              <input type="integer" className="w-60  " name="min" />
            </div>
            <div className="flex-col w-1/2 ">
              <label className="pl-3 font-sans">Maximum Customers per Hour</label>
              <input type="integer" className="w-60" name="max" />
            </div>
            <div className="flex-col w-1/2">
              <label className="pl-8">Average Cookies per Sale</label>
              <input type="float" className="w-60" name="average" />
            </div>
            <button className="px-10 py-3 mr-12 right-5 bg-emerald-500 top-2 text-black-50 font-sans:sans-serif">
              Create
            </button>
          </div>
        </fieldset>
      </form>
    );
  }