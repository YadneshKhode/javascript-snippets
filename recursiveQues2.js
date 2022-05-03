//reverse of question 1w

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
  
  function getUnFlattenedObject(objectArray, separator) {
    const flattenedArrayObject = [];
    let obj = {};
    function unFlattenObject(object) {
      for (const key in object) {
        let tempObj = obj;
        if (Object.hasOwnProperty.call(object, key)) {
          if (key.includes(separator)) {
            const keys = key.split(separator);
            keys.forEach((attribute, index) => {
              if (index === keys.length - 1) {
                tempObj[attribute] = object[key];
              } else {
                if (tempObj[attribute]) {
                  tempObj = tempObj[attribute];
                } else {
                  tempObj[attribute] = {};
                  tempObj = tempObj[attribute];
                }
              }
            });
          } else {
            tempObj[key] = object[key];
          }
        }
      }
  
      return obj;
    }
  
    objectArray.forEach((object) => {
      flattenedArrayObject.push(unFlattenObject(object));
      obj = {};
    });
  
    return flattenedArrayObject;
  }
  console.log(getUnFlattenedObject(user, "_"));
  