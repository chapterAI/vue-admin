import getPageTitle from '@/shared/get-title'

describe('shared:get-title',()=>{
    it('getPageTitle',()=>{
        expect(getPageTitle(undefined)).toBe('Vue - Admin')
        expect(getPageTitle('About')).toBe('About - Vue - Admin')
    })
})