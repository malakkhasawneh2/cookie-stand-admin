export default function ReportTable(props) {
    const allData = props.allData.length == 0;
    if (allData) {
      return <h2 className="text-center font-semibold p-10">No Cookie Stands Available</h2>;
    } else {
      return (
        <div className="container flex flex-col w-3/4 mx-auto mb-20 text-center">
          <table className="border border-collapse border-gray-900 rounded-md bg-emerald-300">
            <thead className="bg-emerald-500">
              <th>Location</th>
              {props.working_time.map((item) => {
                return <th>{item}</th>;
              })}
              <th>Totals</th>
            </thead>
            <tbody className="border border-collapse border-gray-900">
              {props.allData.map((item) => {
                return (
                  <tr className="border border-collapse border-gray-900">
                    <td className="border border-collapse border-gray-900">
                      {item.location}
                    </td>
                    {item.hourly_sales.map((item) => {
                      return (
                        <td className="border border-collapse border-gray-900">
                          {item}
                        </td>
                      );
                    })}
  
                    <td className="border border-collapse border-gray-900">
                      {item.hourly_sales.reduce((a, b) => a + b, 0)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-emerald-500 border border-collapse border-gray-900">
              <tr className="border border-collapse border-gray-900">
                <th className="border border-collapse border-gray-900">Totals</th>
                {props.totalperhour.map((item) => {
                  return (
                    <td className="border border-collapse border-gray-900">
                      {item}
                    </td>
                  );
                })}
                <td className="border border-collapse border-gray-900">
                  {props.totaloftotal}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }
  }