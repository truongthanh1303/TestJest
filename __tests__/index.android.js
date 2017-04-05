import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RNFS from 'react-native-fs';

it('renders correctly', () => {
  RNFS.RNFSFileTypeRegular = jest.fn();
  const tree = renderer.create(
    <Index />
  );
});
