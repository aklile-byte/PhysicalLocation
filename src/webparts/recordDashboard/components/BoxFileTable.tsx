import * as React from "react";
import Table from "./table";

const BoxFile = ({
    words,
    context,
    columns,
    data,
}) => {
    return (
        <div className="">
          
            <div className="row table-overflow">
                <div className="col-12">
                    <Table
                        data={data}
                        context={context}
                        columns={columns}
                        words={words}
                    />
                </div>
            </div>
        </div>
    );
};

export default BoxFile;
