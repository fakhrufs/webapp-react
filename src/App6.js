import React from "react"
class App6 extends React.Component{
	render() {
	  return (
		<div>
		  <meta charSet="utf-8" />
		  <meta
			name="viewport"
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
		  />
		  <meta name="description" content />
		  <meta name="author" content />
		  <title>Heroic Features - Start Bootstrap Template</title>
		  {/* Bootstrap core CSS */}
		  <link
			href="Template/vendor/bootstrap/css/bootstrap.min.css"
			rel="stylesheet"
		  />
		  {/* Custom styles for this template */}
		  <link href="Template/css/heroic-features.css" rel="stylesheet" />
		  {/* Navigation */}
		  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
			  <a className="navbar-brand" href="/#">
				Start Bootstrap
			  </a>
			  <button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			  >
				<span className="navbar-toggler-icon" />
			  </button>
			  <div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item active">
					<a className="nav-link" href="/#">
					  Home
					  <span className="sr-only">(current)</span>
					</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="/#">
					  About
					</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="/#">
					  Services
					</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="/#">
					  Contact
					</a>
				  </li>
				</ul>
			  </div>
			</div>
		  </nav>
		  {/* Page Content */}
		  <div className="container">
			{/* Jumbotron Header */}
			<header className="jumbotron my-4">
			  <h1 className="display-3">Welcome to F&B Reservation System!</h1>
			  <p className="lead">
				Sit home & Reserve your table online! No need to wait in long
				qeues
			  </p>
			  <a href="/#" className="btn btn-primary btn-lg">
				Reserve NOW!
			  </a>
			</header>
			{/* Page Features */}
			<div className="row text-center">
			  <div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
				  <img
					className="card-img-top"
					src="https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/1900x1427.jpg"
					alt=""
				  />
				  <div className="card-body">
					<h4 className="card-title">Pizza Hut</h4>
					<p className="card-text">
					  Pizza Hut is an American restaurant chain and international
					  franchise which was founded in 1958 in Wichita, Kansas by
					  Dan and Frank Carney. The company is known for its Italian
					  American cuisine menu, including pizza and pasta, as well as
					  side dishes and desserts.
					</p>
				  </div>
				  <div className="card-footer">
					<a href="/#" className="btn btn-primary">
					  Reserve your Table!
					</a>
				  </div>
				</div>
			  </div>
			  <div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
				  <img
					className="card-img-top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4XsjqomaieOFBLsIEhEB3sJ6-NqEWGwzaGrB0riAJmc-kXnXo"
					alt=""
				  />
				  <div className="card-body">
					<h4 className="card-title">Student Biryani</h4>
					<p className="card-text">
					  From a humble start to becoming a brand, from a brand to a
					  trend and from a trend to an icon. Café Student has come a
					  long way. This has of course been possible through extreme
					  hard work, a clear vision and unfailing customer loyalty.
					</p>
				  </div>
				  <div className="card-footer">
					<a href="/#" className="btn btn-primary">
					  Reserve your Table!
					</a>
				  </div>
				</div>
			  </div>
			  <div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
				  <img
					className="card-img-top"
					src="https://www.blog.sagmart.com/wp-content/uploads/2015/10/Dunkin-Donuts-Pakistan-Offers-Free-Meal-To-Indians.jpg"
					alt=""
				  />
				  <div className="card-body">
					<h4 className="card-title">Dunkin Donuts</h4>
					<p className="card-text">
					  Dunkin' Donuts, sometimes abbreviated as DD and officially
					  known since 2019 as simply Dunkin', is an American
					  multinational coffeehouse and donut company.
					</p>
				  </div>
				  <div className="card-footer">
					<a href="/#" className="btn btn-primary">
					  Reserve your Table!
					</a>
				  </div>
				</div>
			  </div>
			  <div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
				  <img
					className="card-img-top"
					src="https://i.ytimg.com/vi/yl7Kvh7-JFE/maxresdefault.jpg"
					alt=""
				  />
				  <div className="card-body">
					<h4 className="card-title">Kolachi</h4>
					<p className="card-text">
					  Located at Beach Avenue, Phase. 8, Kolachi offers you an
					  exquisite dining experience! Enjoy delicious Desi and
					  Mediterranean food by a breathtaking view of the Arabian
					  Sea.
					</p>
				  </div>
				  <div className="card-footer">
					<a href="/#" className="btn btn-primary">
					  Reserve your Table!
					</a>
				  </div>
				</div>
			  </div>
			</div>
			{/* /.row */}
		  </div>
		  {/* /.container */}
		  {/* Footer */}
		  <footer className="py-5 bg-dark">
			<div className="container">
			  <p className="m-0 text-center text-white">
				Copyright © Your Website 2019
			  </p>
			</div>
			{/* /.container */}
		  </footer>
		  {/* Bootstrap core JavaScript */}
		</div>
	  );
	}
  }
  
export default App6