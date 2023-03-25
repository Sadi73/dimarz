const countryChanged = () => {
    // document.getElementById('tableBody').innerHTML = '';
    const country = document.getElementById('countryField').value;
    fetchData(country);
}

const fetchData = (country) => {
    fetch('Leads_sample.json')
        .then(res => res.json())
        .then(data => loadData(data, country))
}

const loadData = (allSample, countryName) => {
    // console.log(allSample);
    const filtered_data_with_country_name = allSample.filter(x => x.Column3===`${countryName}`);
    showData(filtered_data_with_country_name);
}

const showData = (foundData) => {
    // console.log(foundData);
    const tableSection = document.getElementById('tableField');
    tableSection.classList.remove('hidden');
    document.getElementById('tableBody').innerHTML = '';
    const Table_Body = document.getElementById('tableBody');
    foundData.slice(0,15).forEach(element => {
        // console.log(element);
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="border-solid border-2 border-white">${element.Column3}</td>
            <td class="border-solid border-2 border-white">${element.Column4}</td>
            <td class="border-solid border-2 border-white">${element.Column5}</td>
            <td class="border-solid border-2 border-white">${element.Column8}</td>
            <td class="border-solid border-2 border-white">${element.Column9}</td>
            <td class="border-solid border-2 border-white">${element.Column17}</td>           
        `
        Table_Body.appendChild(newRow);
    });

    document.getElementById('industryField').addEventListener('change', function(){
        const industry = document.getElementById('industryField').value;
        console.log(industry);
        const filterWithIndustry = foundData.filter(x => x.Column4===`${industry}`)
        // console.log(filterWithIndustry);
        showData(filterWithIndustry);
    })


}