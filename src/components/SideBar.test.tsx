import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import SideBar from './SideBar';
import ListItem from '@material-ui/core/ListItem';


describe('SideBar', () => {

    describe('when type is CANDIDATE', () => {
        let wrapper: ReactWrapper;
        beforeEach(() => {
            wrapper = mount(<SideBar type="CANDIDATE" />);
        });

        it('should render 3 List items', () => {
            expect(wrapper.find(ListItem)).toHaveLength(3);
        })

    });

    describe('when type is RECRUITER', () => {
        let wrapper: ReactWrapper;
        beforeEach(() => {
            wrapper = mount(<SideBar type="RECRUITER" />);
        });

        it('should render 2 List items', () => {
            expect(wrapper.find(ListItem)).toHaveLength(2);
        })

    });

});