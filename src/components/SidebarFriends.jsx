import { Container } from "react-bootstrap";

const SidebarFriends= () => {
    return(
        <Container class="col-0 col-lg-2 px-0  m-0 d-none d-lg-block bg-dark" id="friendsActivity">
			<div>
				<Container fluid class=" bg-dark py-4 px-3">
					<p class="text-light">Friends activity</p>
				</Container>
				<Container fluid class=" bg-dark py-3 px-3 d-flex align-items-start" id="friendsProfile">
					<img src="assets/imgs/icons8-user-64.png" alt="profile_pic" class="img-fluid" id="friendsPicture" />
					<div class="text-light px-2 m-0 friendsInfo">
						<p class="fs-11 fw-bold">Andrea</p>
						<p class="fs-11 fw-light">Highway to Hell </p>
						<p class="fs-11 fw-light">AC/DC</p>
					</div>
				</Container>
				<Container fluid class="bg-dark py-3 px-3 d-flex align-items-start" id="friendsProfile">
					<img src="assets/imgs/icons8-user-64.png" alt="profile_pic" class="img-fluid" id="friendsPicture" />
					<div class="text-light px-2 m-0 friendsInfo">
						<p class="fs-11 fw-bold">Marianna </p>
						<p class="fs-11 fw-light">Zen</p>
						<p class="fs-11 fw-light">Fake News</p>
					</div>
				</Container>
				<Container fluid class="bg-dark py-3 px-3 d-flex align-items-start" id="friendsProfile">
					<img src="assets/imgs/icons8-user-64.png" alt="profile_pic" class="img-fluid" id="friendsPicture" />
					<div class="text-light px-2 m-0 friendsInfo">
						<p class="fs-11 fw-bold">Luqman Mohammed</p>
						<p class="fs-11 fw-light">We are the Champions</p>
						<p class="fs-11 fw-light">Queen</p>
					</div>
				</Container>
			</div>
		</Container>
    )
};

export default SidebarFriends;