import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Pagination,Icon } from 'antd';
// import {Pagination, PaginationItem, PaginationLink, Spinner} from 'reactstrap';

import { Spinner,Modal, ModalBody, ModalHeader} from 'reactstrap';
import '../imageGallery/imageGallery.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteImage: [],
            imageUrl:'',
        }
    };

    componentWillMount() {
        const { favouriteImage,photos } = this.props;
        this.setState({favouriteImage:favouriteImage});
    }

    handleImageClick = (imageUrl) => {
        this.setState({imageUrl:imageUrl,showImage:true});
    };

    toggle=()=>{
        const {showImage}=this.state;
        this.setState({showImage:!showImage});
    };

    render() {
        const {showImage,imageUrl,favouriteImage} = this.state;
        return (
            <div>
                <div style={{display:'flex',flexFlow:'row',backgroundColor: '#282c33', height: 56,width:'100%',justifyContent:'space-between',alignItems:'center',padding:'2%'}}>
                    <div style={{fontSize:30,color:'white',fontWeight:'bold'}}>Favourites({favouriteImage.length})</div>
                </div>
                <div className='image-container'>
                    {
                        favouriteImage.length ?
                            favouriteImage.map((image, i) => {
                                return(
                                    <div className='image-div'>
                                        <div className='image-box'>
                                            <img src={image.thumbnailUrl} key={i} alt={image.title} className="img-thumbnail" onClick={() => {
                                                this.handleImageClick(image.url)
                                            }} />
                                        </div>
                                    </div>
                                )
                            }) :
                            <Spinner color="primary"/>
                    }
                </div>
                <Modal className="img-modal-dialogue" isOpen={showImage} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle} />
                    <ModalBody className="img-modal-body">
                        <img className="img-fluid custom-img" src={imageUrl} alt={"mediaImage"} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        favouriteImage:state.imageGallery.favouriteImage,
        photos:state.imageGallery.photos,
    }
};


export default connect(mapStateToProps,null)(Index);
