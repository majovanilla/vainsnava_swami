import React from 'react';
import classes from '../styles/about.module.scss';
import {Container, Typography} from '@material-ui/core';

function About() {
  return (
    <Container className={classes.mainDiv}>
      <Typography variant="h4" className={classes.mainTitle}>
        Mi Historia
      </Typography>
      {/* <div className={classes.mainContainer}> */}
      <img className={classes.mainPic} src="https://images.unsplash.com/photo-1567983048412-177c435e9e77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80" alt="profile"/>
      <Typography variant="body1" className={classes.mainText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non consequat nisl, vitae ullamcorper sem. Nulla facilisi. Aenean in nisi et eros tincidunt interdum a ac sapien. Etiam et consectetur mi. Donec a sollicitudin ligula, in rutrum dui. Proin sollicitudin eu magna quis tincidunt. Donec sit amet massa sapien. Nunc ac diam in orci sodales ultricies. Nam vel mi nec libero volutpat volutpat. Proin ullamcorper vehicula ligula eu dignissim. Nunc id fermentum tellus.
        <br/>
        <br/>
        Phasellus quam nisl, molestie vel imperdiet a, porta a orci. Proin at nibh dignissim, malesuada erat ac, ornare massa. Mauris congue consequat enim sed dignissim. Etiam blandit, dui eu rhoncus sodales, tellus urna semper purus, ut pretium mauris turpis ut neque. Suspendisse hendrerit erat elit, nec porttitor lectus ullamcorper non. Maecenas in luctus nibh. Mauris vel rutrum eros. Fusce feugiat non erat nec venenatis. Nullam vitae rhoncus dolor. Vivamus congue tempor consequat. Fusce placerat ex ac volutpat efficitur. Integer accumsan blandit nisl vel pretium. Maecenas rutrum molestie tortor sed volutpat. Maecenas nec elit tortor. Nunc venenatis ultricies dolor sed lobortis.
        <br/>
        <br/>

        Praesent tincidunt volutpat dui aliquam auctor. Cras efficitur nibh nunc, at efficitur felis congue sit amet. Morbi porta lorem id nibh aliquet, eget ultricies metus semper. Vestibulum rhoncus finibus euismod. Sed vel vestibulum sem. Donec nibh lacus, lacinia ac scelerisque eget, sollicitudin quis purus. Mauris blandit, risus molestie aliquet faucibus, mi ante convallis turpis, mattis tincidunt ipsum leo vel mi. Aliquam pulvinar justo in sapien interdum, in congue enim elementum. Integer at pellentesque felis. Maecenas fringilla turpis a nisl ornare finibus. Vestibulum sit amet magna sit amet nunc rhoncus eleifend. Aliquam pulvinar tortor erat, ac maximus felis pretium ut. Integer quis blandit est. Nam iaculis leo elit, at volutpat risus viverra a. Suspendisse lacinia, nunc at sagittis interdum, enim ipsum molestie nisi, eget aliquam ante tortor at nisi. Aenean pulvinar pharetra quam, sed faucibus justo imperdiet non.
        <br/>
        <br/>

        Vivamus cursus gravida vulputate. Ut tempor bibendum lectus eget tincidunt. Fusce malesuada dui vitae sapien varius, vel pulvinar ante ultrices. Mauris vel vestibulum orci. Maecenas tincidunt ullamcorper odio ac bibendum. Maecenas placerat malesuada ex. Phasellus semper finibus ligula. Ut vel est non sem ultricies dapibus. Vestibulum pharetra, est id laoreet gravida, est ipsum molestie nunc, vel cursus massa tortor a augue. Cras quam dolor, feugiat volutpat iaculis sit amet, commodo in diam. Quisque eleifend condimentum convallis. Suspendisse facilisis nisi lorem. Curabitur consequat quam quis felis suscipit commodo. Duis a felis et orci maximus bibendum tristique non nibh. Cras elementum sit amet lacus quis finibus.
        <br/>
        <br/>

        Duis a tortor feugiat, semper sapien vel, faucibus nisl. Aenean a dolor finibus, facilisis purus sit amet, sodales dui. Proin volutpat sollicitudin metus, sed scelerisque nisi condimentum quis. Proin lacinia sollicitudin fringilla. Vestibulum at volutpat nisl, sed dignissim velit. Quisque sed metus nulla. Nunc commodo posuere ligula sit amet efficitur. Mauris sit amet risus interdum, sagittis enim nec, consectetur lacus. Nulla facilisi. Curabitur non tortor at dui vulputate tristique ut eu orci. Quisque augue ligula, accumsan non tincidunt ac, blandit eu ligula. Aliquam viverra consequat tortor, eu malesuada neque efficitur ac. Aliquam dapibus tristique blandit. Sed mi leo, feugiat a gravida vel, ullamcorper id ante. Nullam id tellus bibendum, eleifend arcu sit amet, semper enim.
      </Typography>
      {/* </div> */}
  </Container>
  );
}

export default About;
