import React, { Component } from 'react';
import axios from 'axios';


class PlantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          response: [],
          posts: []
        };
      }

      async componentDidMount() {
        await this.results();
        const posts = await this.renderContent();
        console.log("these are the posts:", posts);
        this.setState({ posts });
        console.log(this.state.posts);
      }

      async results() {
        await axios.get('http://localhost:4000/PlantList')
        .then(res => {
          this.setState({ response: res.data })
        })
        .catch((err) => { console.log(err); });
      }

      renderContent() {
        let temp = this.state.response;
        temp.map(data => {
          return Object.values(data);
        })
        return temp;
      }
      render() {
        let first = this.state.response[0];
        let keys = [];
        for(let key in first){
          keys.push(key);
        }
        let countRow = 0, countData = 0;
        return (
          <div className="App">
          <div id="title">Plant Database</div>
          <table className="centered striped">
            <thead>
              <tr>
                {keys.map(data => {
                  return (
                  <th key={data}>{data}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
                 {
                  this.state.posts.map(data => {
                    return (
                      <tr key={countRow++}>
                        {
                          Object.values(data).map(each => {
                            return (
                            <td key={countData++}>{each}</td>
                          )
                          })
                       }
                      </tr>
                    )

                  })
                }
            </tbody>
          </table>
          </div>
        );
      }
}

export default PlantList;
