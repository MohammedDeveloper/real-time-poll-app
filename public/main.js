/**
 * base variables
 */
const form = document.getElementById("vote-form");

/// set the votes API
const votesURL = "http://localhost:3000/poll";

/// add the event listener - form submit
form.addEventListener("submit", (e) => {

    /// check
    if (document.querySelector("input[name=poll]:checked")) {

        /// get the selected 
        const pollChoice = document.querySelector("input[name=poll]:checked").value;

        /// check
        if (pollChoice) {

            /// set the data to be passed to the server
            let dataToPass = {
                pollChoice: pollChoice
            };

            /// post the data using FETCH
            fetch(votesURL,
                {
                    method: "post",
                    body: JSON.stringify(dataToPass),
                    headers: new Headers({
                        'Content-Type': "application/json"
                    })
                })
                .then(res => res.json())
                .then(data => {
                    
                    /// deselect all
                })
                .catch(err => console.log(err));
        }
    }

    /// default
    e.preventDefault();
});

/// retrieve the votes data
fetch(votesURL)
    .then(res => res.json())
    .then(data => {

        /// initiallizers
        const votes = data.votes;
        const totalVotes = votes.length;

        /// count all the votes by poll choice...
        /// accumulator
        /// currentvalue
        const voteCounts = votes.reduce(
            (acc, vote) => (
                (acc[vote.pollChoice] = (acc[vote.pollChoice] || 0) + parseInt(vote.votes)), acc),
            {});

        /// data points for chart using canvas JS
        let dataPoints = [
            { label: "Windows", y: voteCounts.Windows || 0 },
            { label: "MacOS", y: voteCounts.MacOS || 0 },
            { label: "Linux", y: voteCounts.Linux || 0 },
            { label: "Other", y: voteCounts.Other || 0 }
        ];

        /// chart title
        let chartTitle = `Total Votes`;

        /// get the chart container element from HTML
        const chartContainer = document.querySelector("#chartContainer");

        /// check
        if (chartContainer) {

            /// create the canvas chart object
            const chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                theme: "theme1",
                data: [
                    {
                        type: "column",
                        name: "First Quarter",
                        dataPoints: dataPoints
                    }
                ],
                title: {
                    text: chartTitle
                }
            });

            /// render the chart
            chart.render();

            /// pusher code
            /// Enable pusher logging - don't include this in production
            Pusher.logToConsole = true;
            var pusher = new Pusher('a6e27e25e5cf94c37ebd', {
                cluster: 'us2',
                encrypted: true
            });

            /// subscribe the channel which is triggered in server side
            var channel = pusher.subscribe('poll-app');
            channel.bind('my-vote', function (data) {

                /// bind the data from the server...
                dataPoints = dataPoints.map(x => {

                    /// check
                    if (x.label === data.pollChoice) {
                        x.y += data.votes;
                        return x;
                    } else
                        return x;
                });

                /// render the chart and update the count...
                chart.options.title.text = `Total Votes`;
                chart.render();
            });

        }
    })
    .catch(err => console.log(err));
