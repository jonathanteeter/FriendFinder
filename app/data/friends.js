// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        "name":"Jimmy",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXYpLBbn1mUgQENEMW5O2Hd85E9h2qcI4XnYWLb4qyTNHYyE-SQ",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },      
    {
        "name":"Mike",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuldq0dsxm6Q4m_nN3DgGSLWWUlHW7Thbqx_hFim8xTYMryoJ",
        "scores":[
            3,
            5,
            2,
            2,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name":"Venkat",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS062tX8SbBA6neSSPd8cO5bLcWrKLBPE6n9sCuVDRFMMLSbt6R",
        "scores":[
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        "name":"Sammy",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQi3vgonSu9MhvzWGa7qybqGhE7srmoCsTml_rig6-Lf-v958GVw",
        "scores":[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "name":"Eddie",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKRcA1rCqrKqC9aSvIJTJoxtlcANcmEl0n42nIrMfPiyKI6ORmZw",
        "scores":[
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    }                 

];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  