export const InitialState = { 
    DestinationDataState : {
    sort: [
        {
            field: "Location",
            dir: "asc",
        },
    ],
    take: 10,
    skip: 0,
  },

  DestinationGridColumns : [{
    field: "ID",
    title: "ID",
    width: "150px",
    filter: "numeric",
    editable: false
  }, {
    field: "Location",
    title: "Location",
    filter: "text",
    editor: "text"
  }, {
    field: "Price",
    title: "Price",
    filter: "text",
    editor: "numeric"
  }, {
    field: "Description",
    editor: "text",
    filter: "text"
  }, {
    field: "Rating",
    filter: "numeric",
    editable: false
  },
  {
    field: "BookedDates",
    filterable: false,
    editable: false,
    width: "450px"
  }
 ],

 Destinations : [{
  ID: 1,
  Location: "Sofia",
  Price: 20,
  Description: "some description",
  Rating: 3,
  BookedDates: ["2021-8-29", "2021-9-1", "2021-9-3", "2021-9-9"]
},
{
  ID: 2,
  Location: "Burgas",
  Price: 15,
  Description: "some description",
  Rating: 4,
  BookedDates: ["2021-8-30", "2021-9-1", "2021-9-5", "2021-9-11"]
},
{
  ID: 3,
  Location: "Leshten",
  Price: 35,
  Description: "some description",
  Rating: 5,
  BookedDates: ["2021-8-28", "2021-8-29","2021-9-2", "2021-9-3", "2021-9-4"]
}]
}
