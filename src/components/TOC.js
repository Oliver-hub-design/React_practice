import { Component } from 'react';

class TOC extends Component{
    render(){
      var data = this.props.data;
      var lists = [];
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}>
          <a href={"/content/"+data[i].id} 
          data-id = {data[i].id}
          onClick={function(event){
            event.preventDefault();
            this.props.onChangePage(event.target.dataset.id);
          }.bind(this)}>{data[i].title}</a></li>);
        i = i + 1;
      }
      return(
        <nav>
            <ul>
              {lists}
            </ul>
          </nav>
      );
    }
  }
export default TOC;