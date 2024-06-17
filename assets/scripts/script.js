const updates = [
  {
    text: "Royal Challengers Bangalore got back to winning ways, after the defeat against Chennai Super Kings,",
    imgUrl: "./assets/images/image-1.png",
  },
  {
    text: "Royal Challengers Bangalore got back to winning ways, after the defeat against Chennai Super Kings,",
    imgUrl: "./assets/images/image-1.png",
  },
  {
    text: "Royal Challengers Bangalore got back to winning ways, after the defeat against Chennai Super Kings,",
    imgUrl: "./assets/images/image-1.png",
  },
  {
    text: "Royal Challengers Bangalore got back to winning ways, after the defeat against Chennai Super Kings,",
    imgUrl: "./assets/images/image-1.png",
  },
];

const latestUpdates = document.getElementById("latest-updates");

const createCardHTML = ({ text, imgUrl }) => `
<div class="latest-update-subcard">
    <div class="latest-update-img">
         <img src="${imgUrl}" alt="Image" />
    </div>
    <div class="latest-update-content">
        <h4>${text}</h4>
        <div class="news-link">
            <span>News</span>
            <a href="#">
                <img src="./assets/icons/share-icon.svg" alt="" />
            </a>
        </div>
    </div>
</div>
`;

latestUpdates.innerHTML = updates.map(createCardHTML).join("");
