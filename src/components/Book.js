import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { DatePicker, CalendarCell, Calendar } from '@progress/kendo-react-dateinputs';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);

const Book = ({ destinations }) => {
    const [selectedBookedDates, setSelectedBookedDates] = useState([]);
    const [showDates, setShowDates] = useState(false);
    const emailValidator = (value) =>
        emailRegex.test(value) ? "" : "Please enter a valid email.";
    const LocationValidator = (value) => value ? "" : "Please select location.";
    const DateValidator = (value) => value ? "" : "Please select date.";
    const EmailInput = (fieldProps) => {
        const { validationMessage, visited, ...others } = fieldProps;
        return (
            <div>
                <Input {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    //Disabled dates in Calendar are populated based on the selected Location
    const changeDates = (fieldProps) => {
        setShowDates(true);
        setSelectedBookedDates(fieldProps.value.BookedDates);
    }

    const LocationsInput = (fieldProps) => {        
        const { validationMessage, visited, ...others } = fieldProps;
        return (
            <div>
                <DropDownList name="Location" data={destinations} textField="Location" dataItemKey="ID" valueField="ID"  {...others} onChange={fieldProps.onChange} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };
    
    const CustomCalendar = (fieldProps) => {
        return (
            <Calendar
              value={fieldProps.value}
              onChange={fieldProps.onChange}
              cell={(cellData)=>{
                const cellDate = cellData.value.toLocaleDateString();
                let isBooked = false;
                for (let index = 0; index < selectedBookedDates.length; index++) {
                    if(new Date(selectedBookedDates[index]).toLocaleDateString() == cellDate){
                        isBooked = true;
                        break;
                    } 
                }

                return <CalendarCell {...cellData} isDisabled={isBooked} style={{backgroundColor: isBooked? "#888" : "#fff"}}/>
              }}
            />
          );
    }

    const CustomDateInput = (fieldProps) => {
        const { validationMessage, visited, ...others } = fieldProps;
        return (
            <div>
                <DatePicker name="Date" calendar={CustomCalendar} {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    const handleSubmit = (dataItem) => {
        alert(
            JSON.stringify({...dataItem, Location:dataItem.Location.ID}, null, 2)
        )}

    return (
        <React.Fragment>
            <h3>Form for Task 2</h3>
        <div className="form-wrapper">
            
            <Form
                onSubmit={handleSubmit}
                render={(formRenderProps) => (
                    <>
                        <FormElement className="form-element">
                            <fieldset className={"k-form-fieldset"}>
                                <legend className={"k-form-legend"}>
                                    Please fill in the fields:
                                </legend>
                                <div>
                                    <Field name="Location" component={LocationsInput} label={"Location"} onChange={changeDates} validator={LocationValidator}/>
                                </div>
                                <div>
                                   {showDates ? <Field name="Date"  component={CustomDateInput} label={"date"} validator={DateValidator}/> : <>select location</>}
                                </div>
                                <div>
                                    <Field
                                        name={"firstName"}
                                        component={Input}
                                        label={"First name"}
                                    />
                                </div>

                                <div>
                                    <Field name={"lastName"} component={Input} label={"Last name"} />
                                </div>

                                <div>
                                    <Field
                                        name={"email"}
                                        type={"email"}
                                        component={EmailInput}
                                        label={"Email"}
                                        validator={emailValidator}
                                    />
                                </div>
                            </fieldset>
                            <div className="k-form-buttons">
                                <button
                                    type={"submit"}
                                    className="k-button"
                                    disabled={!formRenderProps.allowSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </FormElement>
                    </>
                )}
            />
        </div>
        </React.Fragment>
    )
}

export default withRouter(Book)
