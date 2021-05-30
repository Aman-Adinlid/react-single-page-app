import React from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
                <th>Details</th>
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
                <td><button type="button" className="btn btn-primary" onClick={() => props.detailsTable(tbl.name)}>Details</button></td>

            </tr>

        );
    });
    return <tbody>{tables}</tbody>;

}

const Table = (props) => {
    const { tables, detailsTable } = props;
    return (
        <table className="table table-striped">
            <TableHeader />
            <TableBody tables={tables} detailsTable={detailsTable} />
        </table>
    );
}

export default Table;
