/*
expected output is - 

const user = [
    {
      user_address_office_area_landmark: "MDC7A",
      user_address_office_city: "Airoli",
      user_address_personal_area: "Navare Park",
      user_address_personal_city: "Ambernath",
      user_name: "yadnesh",
    },
    {
      user_addressi_officex_area_landmark: "MDC7B",
      user_addressi_officex_city: "Air",
      user_addressi_personalys_area: "N Park",
      user_addressi_personalys_city: "ulhas",
      user_namei: "aniket",
    },
    {
      user_address_office_area_landmark: "MDCdsfs7A",
      user_address_office_area_landmarkerst: "MDCdsfs7A",
      user_address_office_city: "Airodsfli",
      user_address_office_cityrix: "bbvAirodsfli",
      user_address_personal_area: "Navare Parkff",
      user_address_personal_city: "Ambernathyy",
      user_name: "Rohan",
      user_qualification: "engg",
    },
  ];

*/
const user = [
    {
      name: "yadnesh",
      address: {
        personal: {
          city: "Ambernath",
          area: "Navare Park",
        },
        office: {
          city: "Airoli",
          area: {
            landmark: "MDC7A",
          },
        },
      },
    },
    {
      namei: "aniket",
      addressi: {
        personalys: {
          city: "ulhas",
          area: "N Park",
        },
        officex: {
          city: "Air",
          area: {
            landmark: "MDC7B",
          },
        },
      },
    },
    {
      name: "Rohan",
      address: {
        personal: {
          city: "Ambernathyy",
          area: "Navare Parkff",
        },
        office: {
          city: "Airodsfli",
          cityrix: "bbvAirodsfli",
          area: {
            landmark: "MDCdsfs7A",
            landmarkerst: "MDCdsfs7A",
          },
        },
      },
      qualification: "engg",
    },
  ];
  
  function getFlattenedObject(objectArray, parent) {
    const flattenedArrayObject = [];
  
    let objNew = {};
    function flattenObject(object, parent) {
      for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          if (typeof object[key] === "object" && object[key] !== null) {
            flattenObject(object[key], parent + "_" + key);
          } else {
            objNew[parent + "_" + key] = object[key];
          }
        }
      }
      return objNew;
    }
  
    objectArray.forEach((object) => {
      flattenedArrayObject.push(flattenObject(object, parent));
      objNew = {};
    });
  
    return flattenedArrayObject;
  }
  
  console.log(JSON.stringify(getFlattenedObject(user, "user")));
  