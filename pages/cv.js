import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class CV extends React.Component {
    render() {
        return(
            <BaseLayout>
                <BasePage>
                    <h1> I am on cv Page</h1>
                </BasePage> 
            </BaseLayout>
        )
    }
}
export default CV;