//from
//to

const toControl = document.getElementById('to');
const fromControl = document.getElementById('from');

function validateDate() {
    const fromDate = newDate(fromControl.value);
    const toDate = newDate(toControl.value);

    if (toDate <= fromDate) {
        toControl.setCustomValidity('Must be later than the "from" date');
    }

    // console.log(dates.compare(from,to));
    // if (dates.compare(from,to) === 1) {
    //     alert("Please ensure your from date is before your to date!");
    //     document.myForm.from.focus();
    //     return false;
    // } else {
    //     return true;
    // }


}

document.getElementsByTagName('form')[0].onsubmit= validateDate;

//document.getElementsByTagName('form')[0].onsubmit = checkSubmit;
