import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
    extends: Line,
    data: () => ({
        results: [],
        chartdata: {
            //labels:['2020-3-05',4,5,6],
            labels: [],
            datasets: [{
                    label: 'LRT users in Singapore over time (Years)',
                    data: [],
                    //backgroundColor:['aqua','lightgreen','red','orange'],
                    borderWidth: 0.5,
                    borderColor: "magenta",
                    backgroundColor: 'magenta',
                    fill: false
                },
                {
                    label: 'MRT users in Singapore over time (Years)',
                    data: [],
                    //backgroundColor:['aqua','lightgreen','red','orange'],
                    borderWidth: 0.5,
                    borderColor: "blue",
                    backgroundColor: 'blue',
                    fill: false
                },
                {
                    label: 'Taxi users in Singapore over time (Years)',
                    data: [],
                    //backgroundColor:['aqua','lightgreen','red','orange'],
                    borderWidth: 0.5,
                    borderColor: "purple",
                    backgroundColor: 'purple',
                    fill: false
                },
                {
                    label: 'Bus users in Singapore over time (Years)',
                    data: [],
                    //backgroundColor:['aqua','lightgreen','red','orange'],
                    borderWidth: 0.5,
                    borderColor: "maroon",
                    backgroundColor: 'maroon',
                    fill: false
                }
            ]
        },
        options: {


        }
    }),
    methods: {

        fetchData: function() {
            axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response => {
                this.results = response.data.result.records
                for (let key in this.results) {
                    if (this.results[key].type_of_public_transport == "LRT") {
                        this.chartdata.datasets[0].data.push(this.results[key].average_ridership)
                    } else if (this.results[key].type_of_public_transport == "MRT") {
                        this.chartdata.datasets[1].data.push(this.results[key].average_ridership)
                    } else if (this.results[key].type_of_public_transport == "Taxi") {
                        this.chartdata.datasets[2].data.push(this.results[key].average_ridership)
                    } else if (this.results[key].type_of_public_transport == "Bus") {
                        this.chartdata.datasets[3].data.push(this.results[key].average_ridership)
                    }
                }
                var i;
                for (i = 1995; i <= 2016; i++) {
                    this.chartdata.labels.push(i)
                }
                this.renderChart(this.chartdata, this.options)

            })

        }

    },
    mounted() {
        // console.log('Do I come here')
        this.fetchData()

    }
}