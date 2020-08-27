import { isArray } from '@/shared/util'
describe('shared:util',()=>{
    it('isArray',()=>{
        expect(isArray([])).toBe(true)
        expect(isArray(undefined)).toBe(false)
    })
})