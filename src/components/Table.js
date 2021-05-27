import React from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const tables = props.tables.map((tbl) => {
        return (
            <tr key={tbl.name}>
                <td>{tbl.category}</td>
                <td>{tbl.name}</td>
                <td>{tbl.price}</td>

            </tr>
        );
    });
    return <tbody>{tables}</tbody>;
}

const Table = (props) => {
    const { tables } = props;
    return (
        <table border="1">
            <TableHeader />
            <TableBody tables={tables} />
        </table>
    );
}

export default Table;
