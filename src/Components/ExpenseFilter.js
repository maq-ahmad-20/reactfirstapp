
const ExpenseFilter = ({ selectedYear, onchangeFilter }) => {

    const dropDownHandler = (val) => {
        onchangeFilter(val);
    }

    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Filter by year</label>
                <select value={selectedYear} onChange={(e) => { dropDownHandler(new Date(e.target.value).getFullYear().toString()) }} >
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>

                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;