function generalInfo() {
    return (
        <div className="general">

        </div>

    );
}

function Profile() {
    return (
        <div>
            <fieldset>
                <legend>Profile</legend>
                <div className="filedSpacing">
                    <label htmlFor="firstName">First Name: 
                    {' '}
                    <input id="firstName" value={''} placeholder="Given Name" />
                    </label>
                </div>
                <div className="filedSpacing">
                    <label htmlFor="middleName">Middle Name: 
                    <input id="middleName" value={''} placeholder="Middle Name" />
                    </label>
                </div>
                <div className="filedSpacing">
                    <label htmlFor="lastName">Last Name: 
                    <input id="lastName" value={''} placeholder="Family Name" />
                    </label>
                </div>

            </fieldset>
            <fieldset>
                <legend>Contact Address</legend>
                <div className="filedSpacing">
                    <label htmlFor="email">Email: 
                    <input type="email" id="email" value={''} placeholder="exampe@email.com" />
                    </label>
                </div>
                <div className="filedSpacing">
                    <label htmlFor="phone">Phone Number: 
                    <input type="tel" id="phone" value={''}  />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Education</legend>
                <div className="filedSpacing">
                    <label htmlFor="schoolName">School Name: 
                    {' '}
                    <input id="schoolName" value={''} />
                    </label>
                </div>
                <div className="filedSpacing">
                    <label htmlFor="fieldOfStudy">Field of Study: 
                    <input id="fieldOfStudy" value={''}  />
                    </label>
                </div>
                <div className="filedSpacing">
                    <label htmlFor="year">Year: 
                    <input type="date" id="year" value={''} />
                    </label>
                </div>
                    <button>Add</button>
            </fieldset>
            <fieldset>
                <legend>Experiance</legend>
                <div className="filedSpacing">
                    <label htmlFor="companyName">Company Name: 
                    {' '}
                    <input id="companyName" value={''} />
                    </label>
                </div>
                <div className="filedSpacing">
                    <label htmlFor="positionTitle">Position Title: 
                    <input id="positionTitle" value={''}  />
                    </label>
                </div>
                <div className="filedSpacing">
                    <label htmlFor="role">Main Responsibility/Role: 
                    <input id="role" value={''} />
                    </label>
                </div>
                <div className="filedSpacing">
                    <label htmlFor="from">From: 
                    <input type="date" id="from" value={''} />
                    </label>
                    <label htmlFor="to">To: 
                    <input type="date" id="to" value={''} />
                    </label>
                </div>
            <button> Add</button>
            </fieldset>
        </div>
    );
}

export default Profile;