import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useDeviceType } from '../../src/hooks/useDeviceType';
import { DeviceType, mockWindow } from '../testUtils/TestWindow';

describe('useDeviceType', () => {
  it('should return true for mobile devices', () => {
    mockWindow(DeviceType.MOBILE);

    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBe(true);
  });

  it('should return false for non-mobile devices', () => {
    mockWindow(DeviceType.DESKTOP);

    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBe(false);
  });
});
