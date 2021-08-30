import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { Rating } from "@progress/kendo-react-inputs";
import { Calendar, CalendarCell } from '@progress/kendo-react-dateinputs';



//the state is saved in the App component, so it could be preserved while moving through the different routes 
const Reservations = ({ destinationDataState, setDestinationDataState, destinationGridColumns, setDestinationGridColumns, destinations, setDestinations }) => {
    const [editID, setEditID] = React.useState(null);

    const rowClick = (event) => {
        setEditID(event.dataItem.ID);
    };

    //Handling editing from Grid's onItemChange event (edit mode)
    const itemChange = (event) => {
        console.log("itemchange")
        const inEditID = event.dataItem.ID;
        const field = event.field || "";
        const newData = destinations.map((item) =>
            item.ID === inEditID ? { ...item, [field]: event.value } : item
        );
        setDestinations(newData);
    };

    //Handling Rating change without entering edit mode (view mode)  
    const onRatingChange = (event, rowProps) => {
        const inEditID = rowProps.dataItem.ID;
        const field = rowProps.field || "";
        const newData = destinations.map((item) => 
            item.ID === inEditID ? { ...item, [field]: event.value, } : item
        );
        setDestinations(newData);
    }
    return (
        <div >
            <h1>Task 2</h1>
            <div className="ticket"><p> In the role of developer support you receive a task to make a new sample<br />application for the documentation.</p>
        <p>The application should have 3 pages:<br />- A Home/Hub page with navigation to the other pages.<br />- Data page that uses the KendoReact Grid. The Grid should have filtering, sorting, paging and<br />editing. One of the columns should use a template that alters the default value of the column<br />(e.g. adds extra content, changes styles etc.). The user should be able to resize and reorder the<br />columns.<br />- Reservation form page that uses the KendoReact Form. The form should have different fields<br />and validation on some of the fields.<br />- (Bonus) styling the entire application will be considered a plus.</p></div>
            <Grid
                style={{
                    height: "800px",
                }}
                dataItemKey="ID"
                pageable={true}
                sortable={true}
                filterable={true}
                reorderable={true}
                resizable={true}
                editField="inEdit"
                data={process(destinations.map((item) => ({
                    ...item,
                    inEdit: item.ID === editID,
                })), destinationDataState)}

                onRowClick={rowClick}
                onItemChange={itemChange}
                onDataStateChange={(e) => {
                    setDestinationDataState(e.dataState);
                }}

                onColumnReorder={(e) => {
                    setDestinationGridColumns(e.columns)
                }}
                {...destinationDataState}
            >
                {destinationGridColumns.map((e, index) => {
                    switch (e.field) {
                        case 'Rating':
                            return (
                                <GridColumn key={index} orderIndex={e.orderIndex} {...e} cell={(cellProps) => {
                                    return (
                                        <td>
                                            {/* renders multiple input elements with id="rating", even if the Rating is disabled */}
                                            <Rating key={cellProps.dataItem["ID"]} value={cellProps.dataItem[cellProps.field]} onChange={(e) => onRatingChange(e, cellProps)} />
                                        </td>
                                    )
                                }} />
                            )
                        case 'BookedDates':
                            return (
                                <GridColumn key={index} orderIndex={e.orderIndex} {...e} cell={(cellProps) => {
                                    //clearGridStyles is used to remove some of the Grid styles applied over Table, TH and TD elements
                                    return <td ><Calendar className="clearGridStyles" key={cellProps.dataItem["ID"]} cell={(props)=>{
                                        const cellDate = props.value.toLocaleDateString();
                                        const bookedDates = cellProps.dataItem[cellProps.field];
                                        let isBooked = false;
                                        for (let index = 0; index < bookedDates.length; index++) {
                                            if(new Date(bookedDates[index]).toLocaleDateString() == cellDate){
                                                isBooked = true;
                                                break;
                                            } 
                                        }

                                        return <CalendarCell {...props} isDisabled={isBooked} style={{backgroundColor: isBooked? "#888" : "#fff"}}/>
                                    }}/></td>
                                }}/>
                            )
                        default:
                            return (
                                <GridColumn key={index} orderIndex={e.orderIndex} {...e} />
                            )
                      }
                })}
            </Grid>
        </div>
    )
}

export default withRouter(Reservations)
