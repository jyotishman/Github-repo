import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import RepoList from './Repolist.jsx';



class Profile extends Component{

	render(){
		return(
			<div className="panel panel-default">
					<div className="panel-heading">
			    <h2 className="heading">{ this.props.userData.name }</h2>
				</div>
			  <div className="panel-body">
			  	<div className="row">
			  		<div className="col-sm-4">
			  			<img className="img-responsive img-thumbnail" src={ this.props.userData.avatar_url } alt=""/>
			  		</div>
			  		<div className="col-sm-8">
			  			<div className="row">
			  				<div className="col-sm-12">
			  					<span className="badge badge-primary">
			  						{this.props.userData.public_repos}

			  						Repos
			  					</span>
			  					<span className="badge badge-success">
			  						{this.props.userData.public_gist}

			  						Gist
			  					</span>
			  					<span className="badge badge-info">
			  						{this.props.userData.followers}

			  						Followers
			  					</span>
			  					<span className="badge badge-danger">
			  						{this.props.userData.following}

			  						Following
			  					</span>
			  				</div>
			  			</div>
			  			<hr/>
			  			<div className="row">
			  				<div className="col-sm-12">
			  					<ul className="list-group">
			  						<li className="list-group-item">
			  							<strong>Username: </strong> { this.props.userData.name}
			  						</li>
			  						<li className="list-group-item">
			  							<strong>Location: </strong> { this.props.userData.location}
			  						</li>
			  						<li className="list-group-item">
			  							<strong>Email: </strong> { this.props.userData.email}
			  						</li>
			  						<li className="list-group-item">
			  							<strong>Username: </strong> { this.props.userData.login}
			  						</li>
			  						<li className="list-group-item">
			  							<strong>Username: </strong> { this.props.userData.login}
			  						</li>
			  					</ul>
			  				</div>
			  			</div>
			  			<br/>
			  			<a href={ this.props.userData.html_url } className="btn btn-primary" target="_blank">Visit Profile</a>
			  		</div>
			  	</div>
			  	<hr/>
			  	<h3>User Repositories</h3>
			  	<RepoList

			  		userRepos={this.props.userRepos}

			  	/>
			  </div>
			</div>

		)
	}

}
export default Profile