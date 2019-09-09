import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Pagination, Icon} from 'antd';
import {Spinner, Modal, ModalBody, ModalHeader} from 'reactstrap';

import * as imageGallery from '../../actions/imageGallery/imageGalleryActions';
import './imageGallery.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            limit: 0,
            arr: [],
            totalPage: 0,
            currentPage: 1,
            startIndex: 0,
            endIndex: 0,
            pageImageArr: [],
            favouriteImage: [],
            favImgIdArr: [],
            showImage: false,
            imageUrl: '',

        }
    };

    componentDidMount() {
        const { action: { fetchImageGallery } = {} } = this.props;
        fetchImageGallery().then((res) => {
            if (res) {
                const pageImage = res.filter(photos => photos.albumId === 1);
                this.setState({photos: res, pageImageArr: pageImage, limit: pageImage.length});
            }
        });
    }

    handleImageClick = (imageUrl) => {
        this.setState({imageUrl: imageUrl, showImage: true});
    };

    handleImagePage = (pageNumber) => {
        const {photos} = this.state;
        const pageImage = photos.filter(photos => photos.albumId === pageNumber);
        this.setState({currentPage: pageNumber, pageImageArr: pageImage});
    };

    addFavourite = (imageId) => {
        const { action: { addFavourites } = {} } = this.props;
        addFavourites(imageId)
    };

    toggle = () => {
        const {showImage} = this.state;
        this.setState({showImage: !showImage});
    };

    showFavourites = () => {
        this.props.history.push('/favourites');
    };

    removeFav = (id) => {
        const { action: { removeFavourite } = {} } = this.props;
        removeFavourite(id);
    };

    render() {
        const {photos, pageImageArr, currentPage, limit, showImage, imageUrl} = this.state;
        const {favouriteImage} = this.props;
        const newPageImageArr = pageImageArr.map(img => {
            if (favouriteImage.find(x => x.id === img.id)) {
                return {
                    ...img, favImg: true
                }
            } else {
                return {
                    ...img, favImg: false
                }
            }
        });
        return (
            <div>
                <div className={'header'}>
                    <div style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Gallery</div>
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={this.showFavourites}><span><Icon
                            type="heart" theme="twoTone" twoToneColor="#eb2f96"
                            style={{fontSize: 25}}/></span> Favourites({favouriteImage.length})
                        </button>
                    </div>
                </div>
                <div className='image-container'>
                    {
                        photos.length ?
                            newPageImageArr.map((image, i) => {
                                return (
                                    <div className='image-div'>
                                        <div className='image-box'>
                                            <img src={image.thumbnailUrl} key={i} alt={image.title}
                                                 className="img-thumbnail" onClick={() => {
                                                this.handleImageClick(image.url)
                                            }}/>
                                        </div>
                                        <div className='fav-icon'
                                             onClick={!image.favImg ? () => this.addFavourite(image.id) : () => this.removeFav(image.id, image)}>
                                            <Icon type="heart" theme="filled"
                                                  style={image.favImg ? {color: '#eb2f96'} : {color: 'white'}}
                                                  id={image.id}/>
                                        </div>
                                    </div>
                                )
                            }) :
                            <Spinner color="primary"/>
                    }
                </div>
                {
                    !!photos.length &&
                    <div style={{display: 'flex', justifyContent: 'flex-end', margin: '1%'}}>
                        <Pagination showQuickJumper defaultCurrent={currentPage} total={photos.length} pageSize={limit}
                                    onChange={this.handleImagePage}/>
                    </div>
                }
                <Modal className="img-modal-dialogue" isOpen={showImage} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}/>
                    <ModalBody className="img-modal-body">
                        <img className="img-fluid custom-img" src={imageUrl} alt={"mediaImage"}/>
                    </ModalBody>
                </Modal>
                <Modal className="img-modal-dialogue" isOpen={showImage} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}/>
                    <ModalBody className="img-modal-body">
                        <img className="img-fluid custom-img" src={imageUrl} alt={"mediaImage"}/>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    favouriteImage: state.imageGallery.favouriteImage,
    favouriteImageId: state.imageGallery.favouriteImageId,
});

const mapDispatchToProps = dispatch => {
    return {
        action: {
             fetchImageGallery: bindActionCreators(imageGallery.fetchImageGallery, dispatch),
             addFavourites: bindActionCreators(imageGallery.addFavourites, dispatch),
            removeFavourite: bindActionCreators(imageGallery.removeFavourite, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
