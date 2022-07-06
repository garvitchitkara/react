import React from 'react'

export default function New2() {
    return (
        <div>
            <div className="dropdown my-3">
                <button className="btn btn-secondary dropdown-toggle my-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">steve</a></li>
                    <li><a className="dropdown-item" href="#">tony</a></li>
                    <li><a className="dropdown-item" href="#">natasha</a></li>
                    <li><a className="dropdown-item" href="#">client</a></li>

                    {/* const names= ["steve", "tony", "clint", "natasha"] */}
                </ul>
            </div>
        </div>
    )
}
