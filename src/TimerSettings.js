import React from "react";

const TimerSettings = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 md:flex-row text-black pb-10">
            <div className="flex flex-col">
                <label htmlFor="work-length">Work Length:</label>
                <input
                    type="number"
                    name="work-length"
                    className="mt-1 length-bg"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="short-break-length">Short Break Length:</label>
                <input
                    type="number"
                    name="short-break-length"
                    className="mt-1 length-bg"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="long-break-length">Long Break Length:</label>
                <input
                    type="number"
                    name="long-break-length"
                    className="mt-1 length-bg"
                />
            </div>
            <button type="submit" className="save-btn btn m-auto mt-3 flex">
                Save
            </button>
        </form>
    );
};

export default TimerSettings;
