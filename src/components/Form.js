import React from "react";

function Form() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [tableData, setTableData] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            message
        };

        setTableData([...tableData, data]);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Form;