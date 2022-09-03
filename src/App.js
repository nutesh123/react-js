
import Expenseitem from "./componenets/Expenseitem";
import Expenseplace from "./componenets/Expenseplace";


function App(){

    let location= "At shopping mall" ;

    let expensedetails = [
        {   
            ID : 1,
            title : 'school',
            amount : 40000
        },
          {   
            ID : 2 ,
            title : 'dmart',
            amount : 4322
        },

        {   
            ID : 3 ,
            title : 'cafe',
            amount : 300
        },
        {   
            ID : 4,
            title : 'veggies',
            amount : 430
        },
        {   
            ID : 5,
            title : 'fuel',
            amount : 400
        },
        {   
            ID : 6 ,
            title : 'rent',
            amount : 4000
        }

    ]

    return(
        <div>
            <h1>expense item details</h1>

            for (let i = 0 ; i < = expensedetails.length ; i=i+1) 
            {    
            <Expenseitem
            title={expensedetails[i].title}
            id={expensedetails[i].ID}
             ></Expenseitem>
               }
               <Expenseitem
               title={expensedetails[0].title}
               id={expensedetails[0].ID}
              ></Expenseitem>
               <Expenseitem
               title={expensedetails[1].title}
               id={expensedetails[1].ID}
              ></Expenseitem>
              <Expenseitem
               title={expensedetails[2].title}
               id={expensedetails[2].ID}
              ></Expenseitem>
              <Expenseitem
               title={expensedetails[3].title}
               id={expensedetails[3].ID}
              ></Expenseitem>
              <Expenseitem
               title={expensedetails[4].title}
               id={expensedetails[4].ID}
              ></Expenseitem>
  
              <h2>location of expendure</h2>

            <Expenseplace
                place={location}>
            </Expenseplace>

        </div>
    ) ;
}

export default App;