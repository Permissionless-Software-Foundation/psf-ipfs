/*
Unit tests for file-info command
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import IPFSFileInfo from '../../../src/commands/file-info.js'

describe('#file-info', () => {
  let uut
  let sandbox

  beforeEach(async () => {
    sandbox = sinon.createSandbox()

    uut = new IPFSFileInfo()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#run', () => {
    it('should execute the run function', async () => {
      sandbox.stub(uut, 'getInfo').resolves({ fileMetadata: { cid: 'content id' } })
      const result = await uut.run({ cid: 'content id' })

      assert.equal(result, true)
    })

    it('should handle an error', async () => {
      sandbox.stub(uut, 'getInfo').throws(new Error('test error'))
      const result = await uut.run({ cid: 'content id' })

      assert.equal(result, 0)
    })
  })

  describe('#getInfo', () => {
    it('should get file info', async () => {
      sandbox.stub(uut.axios, 'get').resolves({ data: { success: true, fileMetadata: { cid: 'content id' } } })

      const result = await uut.getInfo({ cid: 'content id' })

      assert.isObject(result)
      assert.isObject(result, 'Expected  to be an object')
    })

    it('should handle axios error', async () => {
      try {
        sandbox.stub(uut.axios, 'get').throws(new Error('test error'))
        await uut.getInfo({ cid: 'content id' })

        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'test error')
      }
    })
    it('should handle missing input', async () => {
      try {
        await uut.getInfo()

        assert.fail('Unexpected code path')
      } catch (error) {
        assert.include(error.message, 'Cannot read properties of undefined')
      }
    })

    it('should throw an error if the cid is not found!', async () => {
      try {
        sandbox.stub(uut.axios, 'get').resolves({ data: { success: true, fileMetadata: {} } })
        await uut.getInfo({ data: { fileMetadata: {} } })

        assert.fail('Unexpected code path')
      } catch (error) {
        assert.include(error.message, 'not found!')
      }
    })

    it('should handle network disconnect', async () => {
      sandbox.stub(uut.axios, 'get').resolves({ data: { success: false, message: 'timeout error' } })

      try {
        await uut.getInfo({ cid: 'content id' })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'timeout error')
      }
    })
  })

  describe('#validateFlags()', () => {
    it('validateFlags() should return true if all arguments are supplied.', () => {
      const flags = {
        cid: 'content id'
      }

      assert.equal(uut.validateFlags(flags), true, 'return true')
    })

    it('validateFlags() should throw error if cid is not supplied.', () => {
      try {
        uut.validateFlags({})

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'You must specify a CID with the -c flag.',
          'Expected error message.'
        )
      }
    })
  })
})
