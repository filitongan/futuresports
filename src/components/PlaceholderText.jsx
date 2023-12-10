//Placeholder text component
export default function PlaceholderText({ searchResults }) {
  //javascript that allows searched text to be highlighted after submitting search
  let faqContent = document.querySelectorAll(".faq-section p");
  faqContent.forEach(function (paragraph) {
    let text = paragraph.textContent.toLowerCase();
    if (text.includes(searchResults.toLowerCase())) {
      paragraph.innerHTML = paragraph.textContent.replace(
        new RegExp(searchResults, "gi"),
        function (match) {
          return '<span class="highlighted">' + match + "</span>";
        }
      );
    } else {
      paragraph.innerHTML = paragraph.textContent;
    }
  });

  return (
    <div className="faq-section">
      <div className="main-content">
        <div className="section">
          <div className="subsection">
            <div className="title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                elementum tempus egestas sed sed. Volutpat consequat mauris nunc
                congue nisi vitae suscipit tellus. Vestibulum lectus mauris
                ultrices eros in cursus turpis massa tincidunt. Imperdiet nulla
                malesuada pellentesque elit eget. Lacus vestibulum sed arcu non
                odio. Dictum non consectetur a erat. Hendrerit dolor magna eget
                est lorem ipsum dolor. Pulvinar sapien et ligula ullamcorper.
                Sed lectus vestibulum mattis ullamcorper. Hac habitasse platea
                dictumst vestibulum rhoncus est pellentesque.
              </p>
            </div>
          </div>
          <div className="subsection">
            <div className="title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="text">
              <p>
                Integer feugiat scelerisque varius morbi enim nunc faucibus a.
                Lobortis elementum nibh tellus molestie nunc non blandit massa
                enim. Lectus arcu bibendum at varius vel pharetra vel turpis.
                Vitae semper quis lectus nulla. Auctor elit sed vulputate mi sit
                amet. Tristique et egestas quis ipsum suspendisse. Tristique
                sollicitudin nibh sit amet commodo nulla facilisi nullam.
                Adipiscing at in tellus integer. Tempus egestas sed sed risus
                pretium quam vulputate dignissim. Arcu non odio euismod lacinia
                at quis risus sed vulputate. Parturient montes nascetur
                ridiculus mus mauris vitae. Donec massa sapien faucibus et
                molestie.
              </p>
            </div>
          </div>
          <div className="subsection">
            <div className="title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="text">
              <p>
                Elementum pulvinar etiam non quam lacus suspendisse faucibus
                interdum posuere. Purus non enim praesent elementum facilisis
                leo vel. Rhoncus mattis rhoncus urna neque viverra justo nec.
                Morbi tristique senectus et netus et. Diam maecenas sed enim ut.
                Sed libero enim sed faucibus turpis in eu mi bibendum. Vitae
                purus faucibus ornare suspendisse sed nisi lacus sed. In
                fermentum et sollicitudin ac orci. Condimentum id venenatis a
                condimentum vitae sapien. Quis viverra nibh cras pulvinar. Nunc
                sed velit dignissim sodales ut eu sem. Id leo in vitae turpis
                massa. Velit scelerisque in dictum non consectetur a erat nam
                at. Fringilla ut morbi tincidunt augue interdum velit euismod in
                pellentesque. Scelerisque fermentum dui faucibus in ornare quam
                viverra orci sagittis. Consequat id porta nibh venenatis cras.
                Elit ullamcorper dignissim cras tincidunt lobortis feugiat
                vivamus. Ac ut consequat semper viverra nam libero. At ultrices
                mi tempus imperdiet nulla malesuada pellentesque.
              </p>
            </div>
          </div>
          <div className="subsection">
            <div className="title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="text">
              <p>
                Orci porta non pulvinar neque laoreet suspendisse interdum
                consectetur. Sed adipiscing diam donec adipiscing tristique
                risus nec feugiat in. Tempor id eu nisl nunc. Faucibus ornare
                suspendisse sed nisi lacus sed. Vitae aliquet nec ullamcorper
                sit amet risus. Auctor urna nunc id cursus. Ac ut consequat
                semper viverra nam. Ornare arcu dui vivamus arcu felis bibendum
                ut. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Sit
                amet porttitor eget dolor morbi non arcu. Feugiat scelerisque
                varius morbi enim nunc faucibus a pellentesque sit. Libero id
                faucibus nisl tincidunt eget nullam non. Viverra aliquet eget
                sit amet tellus cras. Eget velit aliquet sagittis id
                consectetur. Faucibus pulvinar elementum integer enim neque
                volutpat ac. Eu mi bibendum neque egestas congue quisque. Quam
                quisque id diam vel quam elementum pulvinar etiamm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
