//task 1
let ele =0;
async function iterateWithAsyncAwait(){
    if(ele<tab.length){
        setTimeout(() => {
            console.log(tab[ele]);
            ele++;
            iterateWithAsyncAwait()
        }, 1000);
    }
}
iterateWithAsyncAwait([1,2,3,4,5,6,7,8,9]);
//Task2
async function awaitCall() {
    // Simulate API call
    const fetchData = ()=> {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve({data: "This is the fetched data from the API"});
            }, 1000);
        })
    }

try {
//wait for API
    const response = await fetchData();
    console.log(response.data);
    
}
catch(error) {
    console.error("Error:", error);
}
}
// Task 3
async function awaitCall () {
    try {
        const result = await someAsyncFunction();
        console.log(result)
    }
    catch(error) {
        console.error("An error occured while calling the API", error.message);
    }
}

async function firstAsyncFunction () {
    await new Promise(resolve=> setTimeout(resolve,1000));
    console.log("First async Function")
}

async function secondAsyncFunction () {
     await new Promise(resolve=> setTimeout(resolve,1000));
    console.log("second async Function");
}
async function thirdAsyncFunction () {
       await new Promise(resolve=> setTimeout(resolve,1000));
       console.log("third async Function");
}

async function chainedAsyncFunctions () {
    await firstAsyncFunction()
    await secondAsyncFunction()
    await thirdAsyncFunction ()
}

chainedAsyncFunctions()
//Task4
async function concurrentRequests () {
    const fetchData1 =()=> {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve({data: "Data from API call 1"});
            }, 2000);
        });
    }

    const fetchData2 =()=> {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve({data: "Data from API call 2"});
            }, 3000)
        });
    };
    try {
    const [response1, response2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log("Result from API call 1:", response1.data);
    console.log("Result from API call 2:", response2.data)
}

catch(error) {
    console.error("Error fetching data:", error);
}}
concurrentRequests()