import { useState } from "react";
export default function Income() {
  const [formData, setFormData] = useState({
    date: new Date().toUTCString(),
    detail: "",
    amount: 0,
    category: "",
    generateBy: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("https://localhost:7004/api/expenditures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Expenditure created successfully");
        setFormData({
          detail: "",
          amount: "",
          category: "",
          generateBy: "",
          date: "",
        });
      } else {
        console.error("Error creating expenditure: ", response.statusText);
      }
    } catch (error) {
      console.error("Error creating expenditure", error);
    }
  };
  return (
    <>
    <div className="p-4">
     <h1 className="font-bold text-xl py-2 text-center border-2 mb-2">Add Income </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <div>
                <label htmlFor="">Date:</label>
                </div>
                <input
                  type="date"
                  className="border p-1 w-60"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Detail:</label>

                <input
                  type="text"
                  className="border p-1 w-60"
                  placeholder="detail"
                  value={formData.detail}
                  onChange={(e) =>
                    setFormData({ ...formData, detail: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label>Amount:</label>
                <input
                  type="number"
                  className="p-1 w-60"
                  placeholder="amount"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label>Category:</label>
                <input
                  type="text"
                  className="border p-1 w-60"
                  placeholder="category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label>Generate By:</label>
                <input
                  type="text"
                  className="border p-1 w-60"
                  placeholder="name"
                  value={formData.generateBy}
                  onChange={(e) =>
                    setFormData({ ...formData, generateBy: e.target.value })
                  }
                />
              </div >
              <div className="flex items-center mt-6">
                <button className="text-sm bg-green-700 text-white rounded-md p-1 px-2 hover:bg-green-600 transition duration-75 ease-linear">
                  Submit
                </button>
              </div>
            </div>
          </form>
          </div>
    </>
  );
}
