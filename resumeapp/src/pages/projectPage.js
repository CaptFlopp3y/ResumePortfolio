import Image from 'react-bootstrap/Image';

const ProjectPage = () => {
    return (
        <main>
            <header>Projects</header>
            <div class="grid-container">
                <div class="grid-item">
                    <h1>Project name</h1>
                    <p>Project details</p>
                    <Image />
                    <a>Site link</a>
                </div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
            </div>
        </main>
    );
};
export default ProjectPage;