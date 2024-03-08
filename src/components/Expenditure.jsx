import { useState } from "react";
export default function Expenditure() {
  const [formData, setFormData] = useState({
    date: new Date().toUTCString(),
    detail: "",
    cost: 0,
    category: "",
    spendBy: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          cost: "",
          category: "",
          spendBy: "",
          date: "",
        });
      } else {
        console.error("Error creating expenditure: ", response.statusText);
      }
    } catch (error) {
      console.error("Error creating expenditure", error);
    }

    const handleError = {};
    if (!formData.category.trim()) {
      handleError.category = "category field is empty";
    }
    if (!formData.detail.trim()) {
      handleError.detail = "required";
    }
    
    setError(handleError);
  };
  return (
    <>
      <div className="p-4">
        <h1 className="font-bold text-xl py-2 text-center border-2  mb-2">
          Add Expenditure
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Date:</label>
              </div>
              <input
                type="date"
                className="border p-1 w-60"
                placeholder="notes"
                value={formData.date}
                
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              {error.detail && (
                <span className="text-red-500">{error.datail}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Notes:</label>

              <input
                type="text"
                className="border p-1 w-60"
                placeholder="notes"
                value={formData.detail}
                onChange={(e) =>
                  setFormData({ ...formData, detail: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label>Cost:</label>
              <input
                type="number"
                className="p-1 w-60"
                placeholder="cost"
                value={formData.cost}
                onChange={(e) =>
                  setFormData({ ...formData, cost: e.target.value })
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
              {error.category && (
                <span className="text-red-500">{error.category}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label>Spend By:</label>
              <input
                type="text"
                className="border p-1 w-60"
                placeholder="name"
                value={formData.spendBy}
                onChange={(e) =>
                  setFormData({ ...formData, spendBy: e.target.value })
                }
              />
            </div>
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
